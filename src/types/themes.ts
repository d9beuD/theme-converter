export enum iTermColors {
  Ansi0 = 'Ansi 0 Color',
  Ansi1 = 'Ansi 1 Color',
  Ansi2 = 'Ansi 2 Color',
  Ansi3 = 'Ansi 3 Color',
  Ansi4 = 'Ansi 4 Color',
  Ansi5 = 'Ansi 5 Color',
  Ansi6 = 'Ansi 6 Color',
  Ansi7 = 'Ansi 7 Color',
  Ansi8 = 'Ansi 8 Color',
  Ansi9 = 'Ansi 9 Color',
  Ansi10 = 'Ansi 10 Color',
  Ansi11 = 'Ansi 11 Color',
  Ansi12 = 'Ansi 12 Color',
  Ansi13 = 'Ansi 13 Color',
  Ansi14 = 'Ansi 14 Color',
  Ansi15 = 'Ansi 15 Color',
  CursorText = 'Cursor Text Color',
  SelectedText = 'Selected Text Color',
  Foreground = 'Foreground Color',
  Background = 'Background Color',
  Bold = 'Bold Color',
  Selection = 'Selection Color',
  Cursor = 'Cursor Color'
}

export enum TerminalColors {
  AnsiBlack = 'ANSIBlackColor',
  AnsiRed = 'ANSIRedColor',
  AnsiGreen = 'ANSIGreenColor',
  AnsiYellow = 'ANSIYellowColor',
  AnsiBlue = 'ANSIBlueColor',
  AnsiMagenta = 'ANSIMagentaColor',
  AnsiCyan = 'ANSICyanColor',
  AnsiWhite = 'ANSIWhiteColor',
  AnsiBrightBlack = 'ANSIBrightBlackColor',
  AnsiBrightRed = 'ANSIBrightRedColor',
  AnsiBrightGreen = 'ANSIBrightGreenColor',
  AnsiBrightYellow = 'ANSIBrightYellowColor',
  AnsiBrightBlue = 'ANSIBrightBlueColor',
  AnsiBrightMagenta = 'ANSIBrightMagentaColor',
  AnsiBrightCyan = 'ANSIBrightCyanColor',
  AnsiBrightWhite = 'ANSIBrightWhiteColor',
  Background = 'BackgroundColor',
  Text = 'TextColor',
  BoldText = 'BoldTextColor',
  Selection = 'SelectionColor',
  Cursor = 'CursorColor'
}

export interface ITerm2Color {
  red: number
  green: number
  blue: number
}

export interface ITerm2Theme {
  name: string
  colors: {
    [key: string]: ITerm2Color
  }
}

export interface TerminalColor {
  color: string
  bold?: boolean
  underline?: boolean
}

export interface TerminalTheme {
  name: string
  colors: {
    [key: string]: TerminalColor
  }
}
