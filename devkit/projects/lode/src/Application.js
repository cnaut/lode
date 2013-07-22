import ui.TextView as TextView;
import ui.View;
import ui.ImageView;
import ui.SpriteView;

import src.platformer.ParallaxView as ParallaxView;
import src.platformer.GestureView as GestureView;
import src.platformer.Physics as Physics;
import src.platformer.ScoreView as ScoreView;
import src.platformer.util as util;

exports = Class(GC.Application, function () {

	this.initUI = function () {
		util.scaleRootView(this, 1024, 576);
		this.setupParallaxView();
		this.setupPlayer();
		this.gameLayer.addSubview(this.player);
	};
	
	this.setupParallaxView = function () {
		this.parallaxView = new ParallaxView({
			superview: this.view,
			width: this.view.style.width,
			height: this.view.style.height,
		});
		this.gameLayer = this.parallaxView.addLayer({
			distance: 7,
			populate: function (layer, x) {
				return null;
			}.bind(this)
		});
	};
	
	this.setupPlayer = function () {
		this.player = new ui.SpriteView({
			zIndex: 1,
			x: 0,
			y: 0,
			anchorX: 50,
			anchorY: 50,
			autoSize: true,
			url: 'resources/images/avatarKiwiAce/kiwiAce',
			defaultAnimation: 'focused',
			autoStart: true,
		});
	};
	
	
});
