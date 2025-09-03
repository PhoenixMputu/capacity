type SponsorshipProps = {
    title: string;
    sponsors: SponsorProps[];
};

type SponsorProps = {
    name: string;
    logoUrl: string;
    alt?: string;
};

export type { SponsorshipProps, SponsorProps };