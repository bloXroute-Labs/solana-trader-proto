# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: common.proto
# plugin: python-betterproto
from dataclasses import dataclass

import betterproto


class Infinity(betterproto.Enum):
    INF_NOT = 0
    INF_POSITIVE = 1
    INF_NEGATIVE = 2


@dataclass
class PriceImpactPercent(betterproto.Message):
    percent: float = betterproto.double_field(1)
    infinity: "Infinity" = betterproto.enum_field(2)


@dataclass
class Fee(betterproto.Message):
    amount: float = betterproto.float_field(1)
    mint: str = betterproto.string_field(2)
    percent: float = betterproto.float_field(3)
