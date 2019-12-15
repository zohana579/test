package pageObjects;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import core.Base;



public class LoginPageObject extends Base  {
	
	
	public LoginPageObject() {
		
		PageFactory.initElements(driver, this);
		
		}
			@FindBy(how = How.XPATH, using ="//a[text()='Test Enviroment']")
		
		private WebElement testEnviromentLink;
		
		
		@FindBy(how = How.XPATH,using = "//a[text()='Test Enviroment']")
		private WebElement LoginToClassLink;
		
		@FindBy(how = How.ID,using = "nc4wp_email")
		private WebElement subsEmailField;
		
		public void clickOnTestEnviromentLink() {
			testEnviromentLink.sendKeys(Keys.ENTER);
		}
		
		public void clickOnLoginToClassLink() {
			LoginToClassLink.sendKeys(Keys.ENTER);
		}
		

		public void sendValueToSubsEmailField(String emailValue) {
			subsEmailField.sendKeys(emailValue);
		}
		public String pageTitle() {
			String TekSchoolPageTitle = driver.getTitle();
			return TekSchoolPageTitle;
		}
				
				
			
		}
		
	
	
	
	


