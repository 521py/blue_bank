import { BaseScreen } from '@/core/component/base-screen.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'
import { Field } from '@/components/ui/field/field.component'
import { UserItem } from '@/components/ui/user-item/user-item.component'
// import { Button } from '@/components/ui/button/button.component'
import styles from './home.module.scss'
import template from './home.template.html'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new Field({
					name: 'test',
					placeholder: 'enter email',
					variant: 'green'
				}),
				new UserItem(
					{
						avatarPath:
							'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Tennis_ball.svg/240px-Tennis_ball.svg.png',
						name: 'No Name'
					},
					false,
					() => alert('Hey')
				)
			],
			styles
		)

		$R(element).find('h1').css('color', 'blue')

		return element
	}
}
