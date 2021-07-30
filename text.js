
      function validate() {
      
         if( document.contact.Name.value == "" ) {
            alert( "Please enter your name." );
            document.contact.Name.focus() ;
            return false;
         }
         if( document.contact.EMail.value == "" ) {
            alert( "Please enter your e-mail address." );
            document.contact.EMail.focus() ;
            return false;
         }
         if( document.contact.Zip.value == "" || isNaN( document.contact.Zip.value ) ||
            document.contact.Zip.value.length != 5 ) {
            
            alert( "Please enter your 5 digit zip code." );
            document.contact.Zip.focus() ;
            return false;
         }
        
         return( true );
      }
