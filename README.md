# Legacy PureScript npm installer

This repository is retained for historical use. It installs the
`v0.15.16-0x1` PureScript release for **macOS arm64 only**. It does not provide
the pinned typed frontend required by current gopurs.

For gopurs, follow the [current Nix installation guide](https://github.com/0x000000000000000000001/gopurs/blob/main/docs/nix.md).
The TAST frontend is built separately from the public PureScript fork at the
revision pinned by gopurs. That workflow supports Linux x86_64, Linux aarch64
and macOS arm64; macOS Intel is not in its supported platform matrix.

Gopurs no longer depends on this package. Its own JavaScript backend build uses
upstream PureScript, while applications use the separately pinned TAST frontend.
See the [bootstrap guide](https://github.com/0x000000000000000000001/gopurs/blob/main/docs/bootstrap.md)
for the distinction and current source installation instructions.

The historical release below has no Linux or macOS Intel binary. This
installer reports unsupported platforms before attempting a download.

- [Historical release v0.15.16-0x1](https://github.com/0x000000000000000000001/purescript/releases/tag/v0.15.16-0x1)
