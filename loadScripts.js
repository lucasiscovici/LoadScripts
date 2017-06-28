(function() {

 	 window.loadScripts = function(f,comp) {
 	 	      comp= comp || function(){};
 	 	      f= f || [];
 	 	      if(f.length==0){
 	 	      	console.log('LucuxScript////// Format : [{"name":"lib","src":"https://","completion":function(){...}},...]');
 	 	      	return;
 	 	      }
 	 	      def=[{
                     "name": "jQuery",
                     "src": "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
                 }, {
                     "name": "moment",
                     'src': "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.js"
                 }
             ];
             if (f=="def") {
             	f=def;
             }
             ff = f || def;
             this.init(ff,comp);
            

         }
     window.loadScripts.prototype.init = function(ff,comp) {
     	comp= comp || function(){};
     		checkAndLoadMultiples(ff,function(){
             	// console.log("finish");
             	comp();
             })
      };
                      function checkAndLoadMultiples(arr,comp) {
                      	comp= comp || function(){};
                      		if (arr.length==0){
                      			comp();
                      		}else{
                      		k=arr[0];
                      		cm=function(){};
                      		if ("completion" in k) {
                      			cm=k["completion"];
                      		}


                      		compl=cm;
                      		arr2=arr;
                      		arr2.shift();
                      		compl2=function(){
                      			// console.log("DEBUG ");
                      			// console.log(compl);
                      			mm=function(){
                      				compl();
                      				comp();
                      			}
                      			checkAndLoadMultiples(arr2,mm);
                      		}
                      		checkAndLoad(k["name"],k["src"],compl2,k);
                      		}

                      	
                      }

             function addS(src, completion) {
                 var script = document.createElement('script');
                 script.src = src;
                 script.onload = function() {
                     //do stuff with the script
                     completion();
                 };
                 document.head.appendChild(script);
             }

             function checkAndLoad(check, src, co,k) {
             	co = co || function(){};
		k=k || {};
                 if (!window[check])  {
                     addS(src, function() {
                         co();
                     });
                 } else {
                     co();
                 }
             }
         }());
