import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="relative inline-block mb-8 animate-fade-in">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-card card-shadow mx-auto">
              <img
                src="https://ligiacorrea.notion.site/image/attachment%3Ae3c825d3-910b-44b8-b84d-032c2ef5acf1%3ACopia_de_ITALOCESAR_CONFRA_LDN_ICASEI-0301.jpg?id=f4b3560d-aabb-4ec9-b71e-bc64233830fd&table=block&spaceId=a4c5fb53-7256-4287-8559-d9881c87a210&width=250&userId=&cache=v2"
                alt="Ligia Corrêa - UX Writer & Content Designer"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute -bottom-2 -right-2 text-4xl animate-float">🌿</span>
          </div>

          {/* Name & Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-slide-up">
            Ligia Corrêa
          </h1>

          <p className="text-lg md:text-xl text-primary font-medium mb-2 animate-slide-up stagger-1">
            UX Writer & Content Designer
          </p>

          <p className="text-muted-foreground mb-6 animate-slide-up stagger-2">
            Head of UX Writing & Growth Team Lead no iCasei
          </p>

          {/* Location & Languages */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground animate-slide-up stagger-3">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>São Paulo, SP - Brasil</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-3">
              <span>🇧🇷 PT nativo</span>
              <span>🇺🇸 EN proficiência profissional</span>
              <span>🇪🇸 ES iniciante</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
