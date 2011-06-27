How do I write a VJET type library to accompany my JavaScript library?

A VJET type library can be written using JavaScript and using the VJET VJO type construction kit and VJETDoc a documentation syntax for type declarations.

For this example we will be writing a VJET type library which models an imaginary kayak javascript library. This library will model a kayak trip. This JavaScript library has the following documentation already available:

kayak.launch( person, hasPaddle)
kayak.paddleForward(duration);
kayak.paddleBackward(duration);
kayak.setDestination(location);
kayak.stopPaddling();
kayak.addEventListener( eventType, callBack);


The first thing we notice is that the arguments are not typed. For clarity lets add some JSDoc around the apis as we may have seen with an existing library. 

/**
   * @param person Send an object literal with firstName, lastName, launchLog which is optional
   * @param [hasPaddle] optional to pass if the person has a paddle
   * @return void 
*/
kayak.launch( person, hasPaddle)

/**
   * @param duration Number The duration in seconds to paddle 
*/
kayak.paddleForward(duration);

/**
   * @param duration Number The duration in seconds to paddle 
*/
kayak.paddleBackward(duration);

/**
   * @param location Object Pass an object literal with the longitude and latitude of the desired location
*/
kayak.setDestination(location)

/**
   * This method will immediately stop the kayak from moving 
*/
kayak.stopPaddling();

/** 
@param eventType a String representing the event type, launch, stop, paddleForward, paddBackward
@param eventHandler Function a function which passes an event object 
*/
kayak.addEventListener( eventType, eventHandler);

We are going to take the above documentation and add VJETDoc documentation to the apis which will clarify what the function will do then we will introduce types which will help clarify. The first api we will examine is the kayak.launch api. We are going to look at some usage of using this api to help us understand how to add VJETDoc as well as closely examine the JSDoc.

/**
   * @param person Send an object literal with firstName, lastName, launchLog which is optional
   * @param [hasPaddle] boolean optional to pass if the person has a paddle
   * @return void 
*/
kayak.launch( person, hasPaddle)

We are going to rewrite the API using VJETDoc 

//> void launch( Object person, boolean? hasPaddle) 
kayak.launch( person, hasPaddle)

You can see that the VJETDoc is using JavaScript comments and can all be declared on one line.

Let's take a look at a usage of the kayak.launch api:

var kayakTrip = kayak.launch({
	firstName: 'Joe',
	lastName: 'Kayaker',
}, true);

You can notice that launchLog is optional and not being passed in. How can we clarify the VJETDoc to  be more specific about what type of object literal fields are expected and which ones are optional. Since VJET JS IDE provides validation. We can use a type called otype or an Object literal type. This will provide a way to reference the object literal type in VJETDoc. First I will show how you can use VJETDoc with an object literal, then we will promote this to using a otype, then I will show how we can update the VJETDoc comment.

var person = {
	firstName: 'Joe', //< String
	lastName: 'Kayaker', //< String
	launchLog: null //< Date[]
};

Now if you wanted to represent this as an otype you can move the object literal into the defs section of the otype:

vjo.otype('kayakotypes')
.globals({
	kayak: null //< kayakotypes
}
.defs({
	person : {
		firstName: 'Joe', //< String
		lastName: 'Kayaker', //< String
		launchLog: null //< Date[]?
	}
})

Notice on the launchLog we clarified that this is a javascript array with a list of dates that the person launched their kayak. We also used the question mark on the launchLog field to represent that this object literal field is optional. Now let's use this otype in our VJETDoc comment

Before:

//> void launch( Object person, boolean? hasPaddle) 
kayak.launch( person, hasPaddle)

After otype:

//> void launch( kayakotypes::person person, boolean? hasPaddle) 
kayak.launch( person, hasPaddle)

Now we want to see what VJET JS IDE will do with this information. The VJET JS code assist and semantic validation will help. Here are screen shots.

