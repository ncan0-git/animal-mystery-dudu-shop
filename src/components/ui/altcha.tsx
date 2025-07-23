import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react'

// Import <altcha-widget> custom element
import 'altcha'

interface AltchaProps {
  onStateChange?: (ev: CustomEvent) => void
}

// Extend the native HTMLElement with the altcha-widget API
type AltchaWidgetElement = HTMLElement & {
  value?: string | null
}

const Altcha = forwardRef<{ value: string | null }, AltchaProps>(
  ({ onStateChange }, ref) => {
    const widgetRef = useRef<AltchaWidgetElement>(null)
    const [value, setValue] = useState<string | null>(null)

    useImperativeHandle(ref, () => ({
      get value() {
        return value
      },
    }), [value])

    useEffect(() => {
      const handleStateChange = (ev: Event) => {
        const customEvent = ev as CustomEvent
        if ('detail' in customEvent && customEvent.detail?.payload) {
          setValue(customEvent.detail.payload)
          onStateChange?.(customEvent)
        }
      }

      const current = widgetRef.current
      if (current) {
        current.addEventListener('statechange', handleStateChange)
        return () => current.removeEventListener('statechange', handleStateChange)
      }
    }, [onStateChange])

    return (
      <altcha-widget
        ref={widgetRef}
        style={{
          '--altcha-max-width': '100%',
        }}
      />
    )
  }
)

Altcha.displayName = 'Altcha'

export default Altcha