module Colorable where

import Prelude

import Data.Decimal (fromNumber, toFixed)
import Data.Ord (comparing)
import Color (contrast, fromHexString, luminance, rgba, toHexString)
import Data.Foldable (maximumBy)
import Data.Maybe (maybe)
import Data.Number.Format (toString)

getContrast :: String -> String -> String
getContrast s1 s2 =
  let result = 
        contrast <$> fromHexString s1 <*> fromHexString s2
  in maybe "Invalid input" (toFixed 2 <<< fromNumber) result

getLuminance :: String -> String
getLuminance s = 
  maybe "Invalid input" toString (luminance <$> fromHexString s)