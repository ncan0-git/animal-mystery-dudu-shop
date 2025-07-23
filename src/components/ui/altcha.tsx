import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react'

interface AltchaProps {
  onStateChange?: (ev: Event | CustomEvent) => void
}

const Altcha = forwardRef<{ value: string | null }, AltchaProps>(({ onStateChange }, ref) => {
  const widgetRef = useRef<HTMLElement>(null)
  const [value, setValue] = useState<string | null>(null)

  useImperativeHandle(ref, () => {
    return {
      get value() {
        // Get the token from the hidden input field that ALTCHA creates
        const input = document.querySelector('input[name="altcha"]') as HTMLInputElement
        return input?.value || null
      }
    }
  }, [])

  useEffect(() => {
    const handleStateChange = (ev: Event | CustomEvent) => {
      if ('detail' in ev) {
        setValue(ev.detail.payload || null)
        onStateChange?.(ev)
      }
    }

    const { current } = widgetRef

    if (current) {
      current.addEventListener('statechange', handleStateChange)
      return () => current.removeEventListener('statechange', handleStateChange)
    }
  }, [onStateChange])

  return (
    <altcha
      ref={widgetRef}
      name="altcha"
      sitekey="your-site-key"
      style={{
        '--altcha-max-width': '100%',
      }}
    ></altcha>
  )
})

Altcha.displayName = "Altcha"

export default Altcha