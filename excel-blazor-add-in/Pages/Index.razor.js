/* Copyright(c) Maarten van Stam. All rights reserved. Licensed under the MIT License. */
 
var dataToPassToService = {
    "Feedback": "f",
    "Rating": "r",
    "Activité": "a"
};
(window).lancerchaîné = async (event) => {
    console.log("lancerchaîné30");
    try {
        await callStaticLocalComponentMethod();
    }
    catch (err) {
        console.log();
        console.log("erreur lancer : " + err.message);
    }
    console.log("eventlancer Completed");
    event.completed();
}
async function callStaticLocalComponentMethod() {
    console.log("avant");
    try {      
        var dato = "lancé";
        var jsObjectReference = DotNet.createJSObjectReference(window);
        dato = await DotNet.invokeMethodAsync("BlazorAddIn", "Localfunction", jsObjectReference, dataToPassToService);
        DotNet.disposeJSObjectReference(jsObjectReference);
        //dato = await DotNet.invokeMethodAsync("BlazorAddIn", "Localfunction");
        console.log("fin lancé : " + dato);       
    }
    catch (err) {
        console.log();
        console.log("erreur call : " + err.message);
    }
    finally {      
        console.log("aprèslancé : " );
    }

}
