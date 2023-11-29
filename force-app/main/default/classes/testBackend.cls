public with sharing class testBackend {
    @AuraEnabled
    public static Contact getContacts(String First, String Last, String accId) {
        system.debug('full name is '+First +' '+Last);
Contact con = new Contact();
con.FirstName = First;
con.LastName = Last;
con.AccountId = accId;
insert con;
system.debug('con is '+con);
return con;
        //return [SELECT Id, FirstName, LastName, Email FROM Contact];
    }
}