### Stylesheet Architecture

#### Some basic explanation
There is a `layouts` folder for the sole purpose to be able to see the definitions and customizations of the components. Once completed can be deleted?

* Use of [BEM](http://getbem.com/introduction/) for css style declarations and customization of modules inside the `layout`folder

* Use of Sass `default variables` by adding a `!default` flag declaration inside [variable declarations](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_)

* **SOON** Move to [Sass maps](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_) for multiple variable declarations


#### Folder structure based on - [Sass](http://sass-guidelin.es/).
```
styles
|
base
	|
	_globals.scss     # Globals declarations
	|
	_resets.scss      # Resets declarations
	|
	_typography.scss  # Typography declarations
	|
	....
|	
components          # Components and their styles
	|
	_blockquote.scss
	|
	_code.scss
	|
	_grid.scss
	|
	_link.scss
	|
	_list.scss
|
functions
|
mixins              # Individual mixins
	|
	_grids.sccs
	|
	...
|
valiables           Variable declarations
	|
	_colors.scss
	|
	_fonts.scss
	|
	....
|
layout              # Styles for reusuable components of main site.
	| 
	_footer.scss
	|
	_header.scss
	|
	_nav.scss	
|
themes
|
nucss.scss         # Main import file
```