import { 
  ChefHat, 
  Utensils, 
  Flame, 
  Soup, 
  Beef, 
  Apple, 
  Timer, 
  Coffee,
  Egg,
  Croissant,
  Pizza,
  IceCream,
  Cake,
  GlassWater,
  Fish,
  Cookie
} from "lucide-react"

export function BackgroundSketches() {
  return (
    /* pointer-events-none ensures users can click right through these icons to form inputs */
    <div className="hidden md:block absolute inset-0 pointer-events-none select-none opacity-[0.12] dark:opacity-[0.06] transition-opacity duration-300">
      
      {/* ── TOP LEFT QUADRANT ── */}
      <div className="absolute top-[8%] left-[5%] rotate-12 scale-110">
        <ChefHat className="h-16 w-16 stroke-[1.1]" />
      </div>
      <div className="absolute top-[24%] left-[3%] -rotate-12">
        <Utensils className="h-12 w-12 stroke-[1.1]" />
      </div>
      <div className="absolute top-[5%] left-[18%] rotate-45">
        <Flame className="h-10 w-10 stroke-[1.1]" />
      </div>
      <div className="absolute top-[18%] left-[14%] rotate-6">
        <Cookie className="h-11 w-11 stroke-[1.1]" />
      </div>
      
      {/* ── BOTTOM LEFT QUADRANT ── */}
      <div className="absolute bottom-[12%] left-[4%] rotate-12">
        <Soup className="h-15 w-15 stroke-[1.1]" />
      </div>
      <div className="absolute bottom-[28%] left-[12%] -rotate-45">
        <Timer className="h-10 w-10 stroke-[1.1]" />
      </div>
      <div className="absolute bottom-[5%] left-[18%] rotate-12">
        <Beef className="h-14 w-14 stroke-[1.1]" />
      </div>
      <div className="absolute bottom-[20%] left-[22%] -rotate-12">
        <Pizza className="h-12 w-12 stroke-[1.1]" />
      </div>

      {/* ── TOP RIGHT QUADRANT ── */}
      <div className="absolute top-[10%] right-[7%] -rotate-12 scale-105">
        <Coffee className="h-16 w-16 stroke-[1.1]" />
      </div>
      <div className="absolute top-[26%] right-[3%] rotate-45">
        <Croissant className="h-12 w-12 stroke-[1.1]" />
      </div>
      <div className="absolute top-[4%] right-[20%] -rotate-6">
        <Egg className="h-11 w-11 stroke-[1.1]" />
      </div>
      <div className="absolute top-[18%] right-[14%] rotate-25">
        <Cake className="h-12 w-12 stroke-[1.1]" />
      </div>

      {/* ── BOTTOM RIGHT QUADRANT ── */}
      <div className="absolute bottom-[8%] right-[6%] rotate-12">
        <Apple className="h-14 w-14 stroke-[1.1]" />
      </div>
      <div className="absolute bottom-[25%] right-[15%] -rotate-12">
        <Flame className="h-12 w-12 stroke-[1.1]" />
      </div>
      <div className="absolute bottom-[5%] right-[22%] rotate-45">
        <Fish className="h-13 w-13 stroke-[1.1]" />
      </div>
      <div className="absolute bottom-[18%] right-[24%] -rotate-90">
        <IceCream className="h-11 w-11 stroke-[1.1]" />
      </div>

      {/* ── CENTRAL SUBTLE ANCHORS (Peeking behind container margins) ── */}
      <div className="absolute top-[45%] left-[8%] rotate-80">
        <GlassWater className="h-10 w-10 stroke-[1.1]" />
      </div>
      <div className="absolute top-[48%] right-[8%] rotate-[-35deg]">
        <Utensils className="h-11 w-11 stroke-[1.1]" />
      </div>
      
    </div>
  )
}