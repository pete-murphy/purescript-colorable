module Colorable where

import Prelude

import Data.Ord (comparing)
import Color (contrast, fromHexString, rgba, toHexString)
import Data.Foldable (maximumBy)
import Data.Maybe (maybe)

getContrast :: String -> String -> String
getContrast s1 s2 = 
  let result = do
        c1 <- fromHexString s1
        c2 <- fromHexString s2
        pure $ contrast c1 c2
  in maybe "Invalid input" show result
  