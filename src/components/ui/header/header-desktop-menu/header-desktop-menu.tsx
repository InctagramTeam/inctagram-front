type Props = {}

export const HeaderDesktopMenu = ({}: Props) => {
  return (
    <nav>
      <ul className={`flex gap-8 justify-center`}>
        <li>
          <a href="#">Some link</a>
        </li>
        <li>
          <a href="#">Some link</a>
        </li>
        <li>
          <a href="#">Some link</a>
        </li>
      </ul>
    </nav>
  )
}
