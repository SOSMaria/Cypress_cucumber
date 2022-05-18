Feature: Open links
  
  Open link and verify it 

  Scenario: Verify link of standarts web of devices
    Given I navigate to standards/webofdevices/multimodal
    Then I verify webofdevices/multimodal and .title load
    Then I verify console errors do not appear

  Scenario: Verify link of standarts web design
    Given I navigate to standards/webdesign/htmlcss
    Then I verify webdesign/htmlcss and .title load
    Then I verify console errors do not appear

  Scenario: Verify error link
    Given I navigate to standards/badpage
    Then I verify error page
