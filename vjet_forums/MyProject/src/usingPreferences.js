// currently we can use the meta type in the VJETDoc comments
var prefs; //< namespace.PreferencesMetaType


// another approach assign global function instance.

// this warning is acceptable since the Preferences constructs method requires one argument of type object.

var prefs4;
prefs4 = new Preferences({});


var prefs = new Preferences();
var prefs2 = new Preferences({});

var prefs3 = new Preferences2({
	branch:"test"
	,site:"foobar"
});

// add your cursor between OL and you will get proposals for branch and site.
// currently there is an error since I am not sending any arguments
prefs3.doIt({})

// if I add the correct arguments the errors go away.
prefs3.doIt({
	branch:"test"
	,site:"foobar"
});

// if both of these names are not required then you can add a ? to the end of the property definition...

/*

change this:
	branch:null //< String
to this:
	branch:null //< String?
	
change this:
,site:null //< String
to this:
,site:null //< String?
			
		}
	}).endType()

*/