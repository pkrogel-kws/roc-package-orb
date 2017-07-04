# Commands for `roc-package-dev-orb`

## General Information
All commands can be called with some additional options illustrated in the table below.

### General options

| Name                  | Description                                    | Required |
| --------------------- | ---------------------------------------------- | -------- |
| -b, --better-feedback | Enables source-map-support and loud-rejection. | No       |
| -c, --config          | Path to configuration file.                    | No       |
| -d, --directory       | Path to working directory.                     | No       |
| -h, --help            | Output usage information.                      | No       |
| -V, --verbose         | Enable verbose mode.                           | No       |
| -v, --version         | Output version number.                         | No       |

## Commands
* [development](#development)
    * [build](#build)
    * [clean](#clean)
    * [dev](#dev)
* [meta](#meta)
    * [docs](#docs)
    * [list-settings](#list-settings)

## development
__Project development__

```
roc development <command>
```
Commands for development purposes.


### build
__Build the current project.__

```
roc development build [targets]
```

#### Arguments

| Name    | Description                                                                      | Default | Type            | Required | Can be empty |
| ------- | -------------------------------------------------------------------------------- | ------- | --------------- | -------- | ------------ |
| targets | The targets the project should be built for, overrides the settings if provided. |         | `Array(String)` | No       | Yes          |

####  Settings options
* [build](docs/Settings.md#build)

####  Defined by extensions
roc-abstract-package-base-dev, roc-package-webpack-dev

### clean
__Cleans the current project.__

```
roc development clean
```

####  Settings options
* [build](docs/Settings.md#build)

####  Defined by extensions
roc-abstract-package-base-dev

### dev
__Starts the current project in development mode.__

```
roc development dev [targets]
```

#### Arguments

| Name    | Description                                                                      | Default | Type            | Required | Can be empty |
| ------- | -------------------------------------------------------------------------------- | ------- | --------------- | -------- | ------------ |
| targets | The targets the project should be built for, overrides the settings if provided. |         | `Array(String)` | No       | Yes          |

####  Settings options
_All groups are available._
* [build](docs/Settings.md#build)
* [dev](docs/Settings.md#dev)

####  Defined by extensions
roc-abstract-package-base-dev, roc-package-webpack-dev

## meta
__Meta commands__

```
roc meta <command>
```
Meta commands that can be used to generate meta data about the current project.


### docs
__Generates documentation for the current project.__

```
roc meta docs
```

#### Command options

| Name       | Description                                                   | Default        | Type                                                              | Required | Can be empty |
| ---------- | ------------------------------------------------------------- | -------------- | ----------------------------------------------------------------- | -------- | ------------ |
| --html     | If HTML should be generated. (Not supported yet)              | `false`        | `Boolean`                                                         | No       |              |
| --markdown | If markdown should be generated.                              | `true`         | `Boolean`                                                         | No       |              |
| --mode     | The platform that is to be used, for link generation.         | `"github.com"` | `/github\.com|nodejs\.org|bitbucket\.org|ghost\.org|gitlab\.com/` | No       |              |
| --output   | A directory to place the generated documentation inside of.   | `"docs"`       | `String`                                                          | No       | No           |
| --project  | If the projects configuration and actions should be included. | `false`        | `Boolean`                                                         | No       |              |

####  Defined by extensions
roc

### list-settings
__Prints all the available settings that can be changed.__

```
roc meta list-settings
```

####  Defined by extensions
roc

