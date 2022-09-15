# Outpost design system


## Techical information

I've tried to make this system as simple and as default as possible. At the time of creation I have selected to use which ever is the latest lts version of node to avoid ties to individual versions. This runs the risk of development environments not being compatible but I think its a risk we're ok to take given that this is hopefully going to remain very simple...

I've also chosen not to commit the package-lock file on purpose, until we get some standardisation of environments eg docker its not worth the hassle.


### Libraries

* [parceljs](https://parceljs.org/getting-started/library/)


### Why not these

* `yarn` - great idea, but I have so many issues with it on machines and then it throws errors on deployment. Its too inconsistent despite the advantages it brings
* `webpack` - it overcomplicates things. plus we want to output to all kinds of places