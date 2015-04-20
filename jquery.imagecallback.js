;(function($){
	var ImageCallback = function(el, sett){
		var $element = $(el);
		var loaded = 0;
		var toLoad;
		var defaults = {};
		var settings = $.extend({}, defaults, sett);
		
		this.init = function(){
			var $images = $element.find('img');
			toLoad = $images.size();
			
			$images.each(function(){
				if(this.complete){
					addComplete();
				}else{
					$(this).on('load', function(e){
						addComplete();
					});
				}
			});
			
			if(toLoad == 0){
				checkComplete();
			}
		}
		
		var addComplete = function(){
			loaded++;
			checkComplete();
		}
		
		var checkComplete = function(){
			if(loaded >= toLoad){
				$element.trigger('imageload-complete');
				$(this).trigger('imageload-complete');
				if(settings.callback){
					settings.callback($element);
				}
			}
		}
	}

    $.fn.imagecallback = function(settings){
		return this.each(function(){
			var element = $(this);
			// Return early if this element already has a plugin instance
			if (element.data('imagecallback')) return;

			var myplugin = new ImageCallback(this, settings);

			// Store plugin object in this element's data
			element.data('imagecallback', myplugin);
			
			myplugin.init();
		});
	};	
}(jQuery));