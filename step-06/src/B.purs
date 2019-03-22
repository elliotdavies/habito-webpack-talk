-- This is now in PureScript instead of JavaScript
module Main where

import Prelude (pure)
import Effect (Effect)

main :: Effect String
main = pure "<p>This is module B - from PureScript!</p>"
