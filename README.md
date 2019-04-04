# markdown-it-lazy-image
Lazy image plugin for markdown-it parser, replace 'src' attributes with 'data-src' for use with lazyload.

## Install

```bash
yarn add markdown-it-lazy-image
```

## Usage

```js
var md = require('markdown-it')();
var lazy_image = require('markdown-it-lazy-image');

md.use(lazy_image [, options]);

md.render(`![](example.png "image title")`);

// returns:
//
//<p><img src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="example.png" alt title="image title" /></p>
```

Options are not mandatory:

- **placeholder** (String or Url) - replace 'src' attributes with give placeholder

## License

[MIT](LICENSE) © h404bi

> [Website](https://www.h404bi.com) · GitHub [@h404bi](https://github.com/h404bi) · Twitter [@h404bi](https://twitter.com/h404bi)
