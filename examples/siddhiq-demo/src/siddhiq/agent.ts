export const consent = (flags:{store:boolean; share:boolean}) => {
  if (!flags.store || !flags.share) throw new Error("Consent not granted");
};
