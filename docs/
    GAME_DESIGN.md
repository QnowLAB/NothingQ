# NothingQ Game Design

## Core Loop

Players click emoji targets as quickly as possible.

The game becomes faster every level.

Missing targets or clicking bombs costs lives.

The game ends when all lives are lost.

---

## Targets

😀
+1 point

⭐
+5 points

💎
+20 points

👑
+50 points

🪙
+2 points

⚡
+3 points

❤️
+5 Combo

💣
-10 Coins
-1 Life

---

## Scoring

Points increase score.

Positive points also become coins.

Best Score is stored in localStorage.

---

## Lives

Start with 3.

Missing a target:
- Lose 1 life.

Bomb:
- Lose 1 life.
- Lose 10 coins.

0 lives = Game Over.

---

## Combo

Starts at x1.

Every successful click increases combo.

❤️ immediately adds +5 combo.

---

## Levels

Every 25 points:

- Level +1
- Faster target speed

Minimum speed:
250ms

---

## Coins

Earned from positive targets.

Spent in the Shop (V3.2).

---

## Shop (Planned)

Extra Life

Combo Boost

Slow Time

Coin Multiplier

---

## Design Principles

Fast.

Simple.

Easy to learn.

Hard to master.

Everything should feel rewarding.