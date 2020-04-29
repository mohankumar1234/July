package Runner;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions( format = {"pretty" , "html:target/report"} , 
features = "src/main/java/Feature" , glue = "StepDefinitions" , tags = {"@TC1 , @TC2 , @TC3 , @TC4 , @TC5"})
public class TestRunner extends AbstractTestNGCucumberTests {

}





