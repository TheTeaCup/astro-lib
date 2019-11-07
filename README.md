# astro-lib
A simple js library for astrology.

## Examples 
See examples folder in the repository.

Or check out this [Codepen](https://codepen.io/GBora/pen/eYYVjaz) for basic usage.

## Documentation
See the documentation [here](https://gbora.github.io/astro-lib/) in the docs folder.

## Use in browser
When using in browser you need to add [moment.js](https://momentjs.com/) before using the library.

Also please note that while the name of the package is `astro-lib`, in code you must use `astro_lib` please see the example folder. 

## Date format
Under the hood, this uses the [moment.js](https://momentjs.com/) library to handle all sorts of edge cases regarding dates, by default it uses the `YYYY-MM-DD` format, but you can send any date format moment.js allows and it should use it

## License
MIT, see accompaning license file.

## TODO

* Investigate adding function to get Moon sign.
* Add testing for modality and elements
