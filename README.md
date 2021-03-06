# Debug your Adonis App with Ray to fix problems faster

This package can be installed in Adonisjs application to send messages to [the Ray app](https://myray.app).

## Documentation

You can find the full documentation on [our documentation site](https://spatie.be/docs/ray/v1/usage/javascript).

## Installation
- Add package:
```bash
    
    npm i @faisal50x/ray
    
```

- Register providers inside the your start/app.js file.
```js
const providers = [
    ...
        '@faisal50x/ray/providers/RayProvider',
    ...
]
```

## Example 

```js
  const Ray = use('@faisal50x/ray');

  Ray("Yahoooo it's working.").color('green');
  
  //JSON
  Ray().toJson({
    appName: "Adonis Ray",
    appVersion: "0.0.1",
    author: "Faisal Ahmed",
    credit: "Spatie"
  });
  
  //Table
  Ray().table({
    "node_version": "15.0",
    "adonis_version": "4.1",
    "os": "MacOS 11.1"
  });
  
```

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits
- [Faisal Ahmed](https://github.com/Faisal50x)
- [Miguel Piedrafita](https://github.com/m1guelpf)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
