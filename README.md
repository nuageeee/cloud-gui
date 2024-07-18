# cloud-gui

Cloud-GUI is a part of CloudOS and a fork of [jade-gui](https://github.com/crystal-linux/jade-gui) that allow user of CloudOS to install the OS in a more easier way.

![Github Repo Stars](https://img.shields.io/github/stars/nuageeee/cloud-gui?style=for-the-badge)
![General Discord](https://img.shields.io/discord/1138108139443593246?style=for-the-badge)


## Table of contents

- [Installation](#installation)
- [License](#license)

## installation

Using meson :

```bash
git clone https://github.com/nuageee/cloud-gui
cd cloud-gui
meson --prefix=/usr _build
ninja -C _build
cd _build
ninja install
```

## license

[GPL](https://choosealicense.com/licenses/agpl-3.0/)