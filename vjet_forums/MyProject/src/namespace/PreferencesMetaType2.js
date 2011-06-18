vjo.ctype('namespace.PreferencesMetaType2') //< public
.globals({
	// promote this type to global space
	Preferences2:null //< type::PreferencesMetaType2
})
.protos({
	// constructor is here.. which is your Preferences function
	 constructs:function(args){ //<public constructs(PreferencesMetaType2.objects::args)
	}
	// use this object literal meta type to describe the properties that should passed into the contructor or the method doIt
	// we support code assist for function right now not contructor. 
	,objects : vjo.otype()
	.defs({
		args:{
			branch:null //< String
			,site:null //< String
			
		}
	}).endType()
	
	// created this function for showing the code assist for object literal.
	//>public void doIt(PreferencesMetaType2.objects::args) 
	,doIt : vjo.NEEDS_IMPL
})
.options({
   metatype:true
})
.endType();