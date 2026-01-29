export const getColorClasses = (colorName: string | undefined) => {
  const base = {
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    text: 'text-slate-800',
    badge: 'bg-slate-100 text-slate-600',
    line: 'bg-slate-200'
  };

  if (!colorName) return base;

  switch (colorName) {
    case 'blue':
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-900',
        badge: 'bg-blue-100 text-blue-700',
        line: 'bg-blue-300'
      };
    case 'emerald':
      return {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-900',
        badge: 'bg-emerald-100 text-emerald-700',
        line: 'bg-emerald-300'
      };
    case 'amber':
      return {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-900',
        badge: 'bg-amber-100 text-amber-800',
        line: 'bg-amber-300'
      };
    case 'rose':
      return {
        bg: 'bg-rose-50',
        border: 'border-rose-200',
        text: 'text-rose-900',
        badge: 'bg-rose-100 text-rose-700',
        line: 'bg-rose-300'
      };
    case 'zinc':
      return {
        bg: 'bg-zinc-50',
        border: 'border-zinc-200',
        text: 'text-zinc-900',
        badge: 'bg-zinc-200 text-zinc-700',
        line: 'bg-zinc-300'
      };
    case 'slate':
      return {
        bg: 'bg-slate-100',
        border: 'border-slate-300',
        text: 'text-slate-900',
        badge: 'bg-slate-200 text-slate-700',
        line: 'bg-slate-300'
      };
    default:
      return base;
  }
};