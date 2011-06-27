vjo.otype('kayaktl.kayakotypes') //< public
.globals({
	kayak: null //< kayakotypes
})
.defs({
	//> public void launch( kayakotypes::person person, boolean? hasPaddle) 
    launch:vjo.NEEDS_IMPL
    
	/**
	   * @param duration Number The duration in seconds to paddle 
	*/
    //>public void paddleForward(int duration) 
    ,paddleForward : vjo.NEEDS_IMPL
	/**
	   * @param duration Number The duration in seconds to paddle 
	*/
    //>public void paddleBackward(int duration) 
    ,paddleBackward : vjo.NEEDS_IMPL
    
    /** 
	@param eventType a String representing the event type, launch, stop, paddleForward, paddBackward
	@param eventHandler Function a function which passes an event object 
	*/
    , //>public void addEventListener(String eventType, (void fn(kayaktl.kayakotypes::event event) )) 
    addEventListener : vjo.NEEDS_IMPL	
	
    /**
     * @param location Object Pass an object literal with the longitude and latitude of the desired location
	*/
	//>public void setDestination(kayaktl.kayakotypes::destination coordinates) 
	,setDestination : vjo.NEEDS_IMPL
    
	,//>public void stopPaddling() 
	stopPaddling : vjo.NEEDS_IMPL

	,person : {
		firstName: null, //< String
		lastName: null, //< String
		launchLog: null //< Date[]?
	}
	,event : {
		eventType: null, //< String
		duration: null, //< Number
		person: null //< kayaktl.kayakotypes::person
}
	,destination : {
		longitude: null, //< Number
		latitude: null //< Number
	}
})
.endType()