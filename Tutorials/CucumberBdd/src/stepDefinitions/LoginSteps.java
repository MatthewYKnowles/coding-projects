package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

public class LoginSteps {
    @Given("the user is on the login page")
    public void user_on_login_page() {
        System.setProperty("webdriver.chrome.driver", "jars/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        System.out.println("User is on the login page");
    }

    @When("the user enters valid credentials")
    public void user_enters_valid_credentials() {
        System.out.println("User enters valid credentials");
    }

    @Then("the user should be able to view their account balance")
    public void user_should_see_account_balance() {
        System.out.println("User sees account balance");
    }
}