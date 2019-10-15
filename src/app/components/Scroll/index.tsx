import React, { FC } from 'react'
import {
  compose,
  lifecycle,
  ReactLifeCycleFunctions,
  StateHandler,
  StateHandlerMap,
  StateUpdaters,
  withStateHandlers,
} from 'recompose'
import style from '@/app/components/Scroll/style.scss'

const scrollTop = (): number => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
}

interface State {
  readonly scroll: number
}

interface Updaters extends StateHandlerMap<State> {
  updateScroll: StateHandler<State>
}

type Props = State & Updaters

const component: FC<Props> = (props: Props) => {
  return <div className={style.footer}>Scroll: {props.scroll.toString()}</div>
}

const initProps: State = { scroll: scrollTop() }

const stateUpdaters: StateUpdaters<{}, State, Updaters> = {
  updateScroll: (): StateHandler<State> => (): Partial<State> => ({
    scroll: scrollTop(),
  }),
}
// ここまでimport文以外は、さっきと同じ

const lifeCycleFunctions: ReactLifeCycleFunctions<Props, {}> = {
  componentDidMount() {
    window.addEventListener('scroll', this.props.updateScroll) // PropsにUpdater渡してあるので呼べる
  },
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.updateScroll) // Unmount時に外してあげる
  },
}

export const Scroll = compose<Props, {}>( // withStateHandlersとlifecycleまとめて適用
  withStateHandlers<State, Updaters>(initProps, stateUpdaters),
  lifecycle<Props, {}>(lifeCycleFunctions)
)(component)
