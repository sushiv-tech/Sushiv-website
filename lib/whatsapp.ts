// wa.me requires country code, digits only, no "+" — e.g. 919579928503
const DEFAULT_NUMBER = '919579928503'

export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_NUMBER
}

export function buildWhatsAppLink(
  briefOrMessage?:
    | string
    | {
        name?: string
        serviceType?: string
        description?: string
        timeline?: string
      }
): string {
  const number = getWhatsAppNumber()
  const base = `https://wa.me/${number}`

  if (!briefOrMessage) {
    return `${base}?text=${encodeURIComponent(
      'Hi Sushiv Team, I found you on your website and would like to discuss a project.'
    )}`
  }

  if (typeof briefOrMessage === 'string') {
    return `${base}?text=${encodeURIComponent(briefOrMessage)}`
  }

  const brief = briefOrMessage
  if (!brief.name) {
    return `${base}?text=${encodeURIComponent(
      'Hi Sushiv Team, I found you on your website and would like to discuss a project.'
    )}`
  }

  const text =
    `Hi Sushiv Team! I'm ${brief.name}.\n` +
    (brief.serviceType ? `Looking for: ${brief.serviceType}\n` : '') +
    (brief.timeline ? `Timeline: ${brief.timeline}\n` : '') +
    (brief.description ? `About the project: ${brief.description}\n` : '') +
    `\nSent from sushiv.in`

  return `${base}?text=${encodeURIComponent(text)}`
}
