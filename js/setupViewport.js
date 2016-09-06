function setupViewport(element, stack, image) {
    // Display the image on the viewer element
    cornerstone.displayImage(element, image);
	
    // If it's a movie (has frames), then play the clip
    if (stack.frameRate !== undefined) {
        cornerstone.playClip(element, stack.frameRate);
    }

    // Activate mouse clicks, mouse wheel and touch
    cornerstoneTools.mouseInput.enable(element);
    cornerstoneTools.mouseWheelInput.enable(element);
    cornerstoneTools.touchInput.enable(element);
	
	var foo = $(".thumbnails").get(0);
	cornerstoneTools.touchInput.enable(foo);
	

    // Enable all tools we want to use with this element
    cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
    cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
    cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
    cornerstoneTools.probe.enable(element);
    cornerstoneTools.length.enable(element);
    cornerstoneTools.ellipticalRoi.enable(element);
    cornerstoneTools.rectangleRoi.enable(element);
    cornerstoneTools.wwwcTouchDrag.activate(element);
    cornerstoneTools.zoomTouchPinch.activate(element);

    // Stack tools
    cornerstoneTools.addStackStateManager(element, ['playClip']);
    cornerstoneTools.addToolState(element, 'stack', stack);
    cornerstoneTools.stackScrollWheel.activate(element);
    cornerstoneTools.stackPrefetch.enable(element);
	
	// Keyboard tools
	cornerstoneTools.keyboardInput.enable(element);
	cornerstoneTools.stackScrollKeyboard.activate(element);
	
	
	// Put tabindex on viewport - must click anywhere once to enable up/down arrow scrolling
	$(window).click(function() {
		$(element).attr("tabindex", 0).focus();
	});
	
	$("#fullscreen").click(function() {
		console.log("fullscreen button pushed");
		cornerstoneTools.makeFullscreen();
	});

	$("#scrollButton").click();
	
}
