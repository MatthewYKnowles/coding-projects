#include <stdio.h>
#include <stdlib.h>


int main(int argc, char *argv[]) {
    // ensure proper usage
    if (argc != 2) {
        fprintf(stderr, "Usage: ./recover memoryCard\n");
        return 1;
    }

    // remember filename
    char *infile = argv[1];

    // open input file
    FILE *inptr = fopen(infile, "r");
    if (inptr == NULL) {
        fprintf(stderr, "Could not open %s.\n", infile);
        return 2;
    }

    //for iterating jpg number
    int currentjpg = 0;

    //stored buffer
    char buffer[512];

    //look at the file until there are no bytes returned
    while (fread(buffer, 512, 1, inptr) > 0) {

        // if jpg header
        if (buffer[0] == (char)0xff && buffer[1] == (char)0xd8 && buffer[2] == (char)0xff && (buffer[3] & (char)0xf0) == (char)0xe0) {
            //create new jpg file
            char filename[8];
            FILE *img;
            sprintf(filename, "%03i.jpg", currentjpg);
            img = fopen(filename, "w+");

            //read from jpg file until the end
            do {
                fwrite(buffer, 512, 1, img);

                //if its the end of the file break out of the loop
                size_t bytesRead = fread(buffer, 512, 1, inptr);
                if (bytesRead == 0) {
                    break;
                }
                fprintf(stderr, "bytes read %i.\n", (int)bytesRead);
            }

            while(buffer[0] != (char)0xff || buffer[1] != (char)0xd8 || buffer[2] != (char)0xff || (buffer[3] & (char)0xf0) != (char)0xe0);

            //go back one byte so the while loop will read the beginning of jpg file
            fseek(inptr, -512, SEEK_CUR);

            //close jpg
            fclose(img);

            //iterate jpg number
            currentjpg++;
        }
    }

    // close infile
    fclose(inptr);

    // success
    return 0;
}