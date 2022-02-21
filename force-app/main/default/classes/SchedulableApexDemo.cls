public class SchedulableApexDemo implements Schedulable{
    
    public void execute(SchedulableContext ctx){
        
        	System.debug('Schedule Job Demo');
        	Database.executeBatch(new BatchApexDemo(),200);
    }

}