import { AppPage } from './app.po';
import {TalkSubmissionPage} from './talk-submission.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to atlanta-code-camp!');
  });

  it('should submit a talk for next year\'s code camp', () => {
    const talkSubmissionPage: TalkSubmissionPage = page.navigateToTalkSubmissionPage();
    talkSubmissionPage.setFirstName('Matthew');
    talkSubmissionPage.setLastName('Knowles');
    talkSubmissionPage.setEmail('Matthew@GreaterSum.com');
    talkSubmissionPage.setSubmissionTitle('Test Drive Angular App');
    talkSubmissionPage.setAbstract('using UI, Integration, and Unit Tests');
    talkSubmissionPage.submitTalk();
    expect(talkSubmissionPage.getSubmissionSuccess().getText())
      .toEqual('Matthew, thanks for submitting your talk on Test Drive Angular App.');
  });

  it('should not allow talks on blockchain', () => {
    const talkSubmissionPage: TalkSubmissionPage = page.navigateToTalkSubmissionPage();
    talkSubmissionPage.setFirstName('Matthew');
    talkSubmissionPage.setLastName('Knowles');
    talkSubmissionPage.setEmail('Matthew@GreaterSum.com');
    talkSubmissionPage.setSubmissionTitle('Test Drive a blockchain App');
    talkSubmissionPage.setAbstract('using UI, Integration, and Unit Tests');
    expect(talkSubmissionPage.getBlockchainErrorMessage().getText())
      .toEqual('Sorry no talks on blockchain next year');
  });
});
