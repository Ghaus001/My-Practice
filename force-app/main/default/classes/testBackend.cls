public with sharing class testBackend {
    @AuraEnabled
    public static Contact getContacts(String First, String Last /*,String accId*/) {
        system.debug('full name is '+First +' '+Last);
        final String chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
        String rendPass = '';
        //Code For Generating a random password and storing it to the contact Password field after encryption
        while (rendPass.length() < 8) 
        {
            Integer idx = Math.mod(Math.abs(Crypto.getRandomInteger()), chars.length());
            rendPass += chars.substring(idx, idx+1);
        }
        System.debug('rendPass is '+rendPass);
        String Email = 'g.ghaus001@gmail.com';
        HttpRequest req = new HttpRequest();
        HttpResponse resp = new HttpResponse();
        Http http = new Http();  
        req.setEndpoint('https://dev-wfzyer6lzwpz3dxh.us.auth0.com/dbconnections/signup');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        String reqBody = '{"client_id": "UX2m6wHEEIX7nV4PRzJlYI9RK1ztlPB8","connection": "Username-Password-Authentication", "email": "' + Email + '","name": "' + First+' '+Last + '", "password": "' + rendPass + '"}';
        req.setBody(reqBody);
        try {
            resp = http.send(req);
           // Map<String, Object> respMap = (Map<String, Object>) JSON.deserializeUntyped(resp.getBody());
           // System.debug('respMap: '+respMap);
        } catch (Exception ex) {
            System.debug('Error: ' + ex.getMessage());
        }
        Contact con = new Contact();
        con.FirstName = First;
        con.LastName = Last;
        insert con;
        system.debug('con is '+con);
        return con;
    }
}