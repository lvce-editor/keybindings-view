import * as TextMeasurementWorker from '../TextMeasurementWorker/TextMeasurementWorker.ts'

export const measureTextWidth = async (
  text: string,
  fontWeight: number,
  fontSize: number,
  fontFamily: string,
  letterSpacing: number,
): Promise<number> => {
  try {
    const isMonospaceFont = false
    const charWidth = 0
    return await TextMeasurementWorker.invoke(
      'TextMeasurement.measureTextWidth',
      text,
      fontWeight,
      fontSize,
      fontFamily,
      letterSpacing,
      isMonospaceFont,
      charWidth,
    )
  } catch {
    return 150
  }
}
