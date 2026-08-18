import { isPlaceholder, type TeamMember } from "@/data/team";

/**
 * Leadership card.
 *
 * Portrait photography on this site is grayscale at rest and returns to colour on
 * hover, matching every other image treatment. While a photograph is missing the
 * card holds the exact same footprint with a neutral placeholder, so adding the
 * file later changes nothing about the layout.
 */
export default function LeadershipCard({ member }: { member: TeamMember }) {
  const pending = isPlaceholder(member);

  return (
    <div className="group">
      <div
        className="relative aspect-square overflow-hidden rounded-[2px] mb-5"
        style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
      >
        {pending ? (
          <div className="absolute inset-0 bg-white/[0.03] flex items-center justify-center">
            <span className="text-white/25 text-xs uppercase tracking-[1.5px]">
              Photograph pending
            </span>
          </div>
        ) : (
          <img
            src={member.photo}
            alt={member.name}
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        )}
      </div>

      {pending ? (
        <p className="text-white/30 text-base md:text-xl font-medium mb-1 italic">
          Name to be confirmed
        </p>
      ) : (
        <h3 className="text-white text-base md:text-xl font-medium mb-1">{member.name}</h3>
      )}

      <p className="text-[#B4CC04] text-sm mb-3">{member.role}</p>
      <p className="text-[rgba(207,207,207,0.9)] text-sm md:text-base leading-snug md:leading-6 mb-4">
        {member.bio}
      </p>

      <ul className="flex flex-wrap gap-2 mb-4">
        {member.focus.map((area) => (
          <li
            key={area}
            className="text-xs text-white/50 border border-white/15 rounded-[2px] px-2 py-1"
          >
            {area}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-4">
      {member.handle && (
        <a
          href={`https://x.com/${member.handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white text-sm underline underline-offset-4 transition-colors"
        >
          @{member.handle}
        </a>
      )}
      {member.github && (
        <a
          href={`https://github.com/${member.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white text-sm underline underline-offset-4 transition-colors"
        >
          GitHub
        </a>
      )}
      </div>
    </div>
  );
}
