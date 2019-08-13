  function validate(){
            var name = document.forms[0]["name"].value;
            if(name.length != 0){
                if(name.length >=2 && name.length<=30){
                    if(name.search(/[0-9]/g) == -1){
                            if(name.search(/[^a-z]/i) == -1){
                                if(document.forms[0]["pass"].value != "")
                                window.alert("Submitted Successfully.");
                                else
                                window.alert("Type Password too.")
                            }else{
                                window.alert("No Special Char Allowed.");
                            }
                    }else{
                        window.alert("Name cannot have numbers.");
                    }
                }else{
                    window.alert("2 - 30");
                }

            }else{
                window.alert("Name Cannot Be Empty");
            }

        }