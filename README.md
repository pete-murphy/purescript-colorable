# PureScript Colorable Experiment

The goal is to build upon Brent Jackson's [excellent Colorable project](http://jxnblk.com/colorable/) by allowing users to _generate_ optimal color combinations based on a set of constraints.

**NB:** For `pulp` development server run: `pscid --output src/output/`

## Milestones

* [X] Set background color from input component.
* [X] Set background color from imported PureScript module.
* [X] Parse input using PureScript
* [ ] Replicate Colorable layout
* [ ] Add cards carousel for multiple pairings

## Motivation

I really like Colorable for simple testing of a color palette for accessibility. I often want to expand upon this interface with at least a few features:
  1. It'd be nice to pick a base color, and then find the secondary color with the highest contrast value given a set of constraints (e.g., given a target color a range, find the local maxima of contrast)
  2. Given (at least) a couple possible base colors, find the secondary (text) color that is highest contrast in relation to _both_.

This will probably involve a lot of math that I am ignorant of, so I may start with naive implementations (traversing the whole set of 256<sup>3</sup> colors to find the maximum).

Also, I am simply very interested in learning PureScript.

## Why PureScript?

Admittedly, as of writing, this project doesn't make much of PureScript's greatest strength&mdash;its type system&mdash;but I'm betting that as I arbitrarily add more features it'll be nice to reason about color values as a datatype.
