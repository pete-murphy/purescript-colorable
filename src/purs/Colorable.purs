module Colorable where

import Prelude

import Data.Ord (comparing)
import Color (contrast, fromHexString, luminance, rgba, toHexString)
import Data.Foldable (maximumBy)
import Data.Maybe (maybe)
import Data.Number.Format (toString)

getLuminance :: String -> String
getLuminance s = 
  maybe "Invalid input" toString (luminance <$> fromHexString s)