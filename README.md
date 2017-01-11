#Fallings
A jQuery parallax plugin focusing on manipulating position: absolute elements based on the window.scrollTop() property.

Currently newly supported code is being ported to the `jquery_dist.*.js` file structure via new build structures. This is a work in progress and leaves the past iteration 100% intact.

* Demo: [http://fuhton.github.io/fallings/](http://fuhton.github.io/fallings/)

##Parameters

#### `velocity`
  * default: 0;
  * controls speed of movement relative to scroll;

#### `initialPosition`
  * default: 0;
  * defines the "top" attribute of the element;

#### `bgParallax`
  * default: false;
  * switch the plugin from focusing on the element to the background property;

#### `bgPercent`
  * default: "0%";
  * x-position of background;

#### `onClass`
  * default: "fallings-visible";
  * class when the object is fully in window;

#### `offClass`
  * default: "fallings-invisible";
  * class when the object is fully NOT in window;


#### Defaults
```
{
  velocity: 0,
  initialPosition: 0,
  bgParallax: false,
  bgPercent: '0%',
  onClass: 'fallings-visible',
  offClass: 'fallings-invisible',
};
```

##Support
Any questions or issues should be submitted through GitHub Issues -> [here](https://github.com/fuhton/fallings/issues)
