module Colorable where

import Prelude

import Data.Array (singleton)
import Data.Decimal (fromNumber, toFixed)
import Data.Ord (comparing)
import Color (contrast, fromHexString, luminance, rgba, toHexString)
import Data.Foldable (maximumBy)
import Data.Maybe (maybe)
import Data.Number.Format (toString)
import Simple.JSON (class WriteForeign, write)

getContrast :: String -> String -> String
getContrast s1 s2 =
  let result = 
        contrast <$> fromHexString s1 <*> fromHexString s2
  in maybe "Invalid input" (toFixed 2 <<< fromNumber) result

parseColor :: String -> String
parseColor s =
  maybe "" identity (toHexString <$> fromHexString s)

getLuminance :: String -> String
getLuminance s = 
  maybe "Invalid input" toString (luminance <$> fromHexString s)