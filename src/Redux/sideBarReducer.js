let initialState = [
    {
        id: 1,
        name: 'Dimych',
        img: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'
    },
    {
        id: 2,
        name: 'Andrey',
        img: 'https://www.meme-arsenal.com/memes/cd2652ae9d5c44e3c695d72fd37f647e.jpg'
    },
    {
        id: 3,
        name: 'Sveta',
        img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8NDw0NDw0PEA8NDQ0PDw8NDg0QFREWFhURFRUYHiggGBolGxUVITEhJSkrLi4uFx8zODMsNykuLisBCgoKDg0OGhAQFy0gHyUtLS0tLSstLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQUGAgQHAwj/xABHEAABAwIDBAYFBwoFBQEAAAABAAIDBBEFEiEGMUFhBxNRcYGhIjJykbEUFSNCUmLBJDRDY3OCkqKy0TM1RFPhVJOzwtIl/8QAGwEBAQADAQEBAAAAAAAAAAAAAAECBAUDBgf/xAAyEQEAAgIBAwMCBAUEAwEAAAAAAQIDEQQSITEFQVETMiIzYXEUQoGRsTSh0fAjJVIV/9oADAMBAAIRAxEAPwDtLhP0IQEEQVACIqBZAQVAsgWQLILZELIJZARRAQRAsgWQSyAgiKqAgICAgiChELIKgIKgAIioCAgIKibENiGxDaIogICCEICKiAgIJZFRBUBAQERUAIKAiKgICIIKgIFkRbIFkCyBZBLICAiogICKIJZARUQRARUQckQCC2RFQEBEWyBZEUBBbICAhsQ2KoKAiioKAglkEsgWRUQEUQQoIiiAiqERQiCAibWyCohZBUBAsiBV0ba7jm19NSkx3Mso0McdjlPY524fFbGLjXv38OfyfUsOHt5n9Gq1HSFUE2jgiaOAc58h8rLajg195cu/reSftrEPmNu60amKG3Nkjf8A2WX8DT5Yf/tZ/iHcpukV9/pKYEcSyQg+4j8V5zwY9pe1fW5/mozdFt1RyWD3PiJ/3GG3vbcLwtw8keG9j9W49u0zpsFJiEMwzRyseO1jg/4LXtjtXzDfpmpk+y0S7IN9yxehZDYiiD5SztaWhxAL3BjAfrOsdB7lYrMsZvWO0vooySyKiAihQRFRByCIICI5WRBBUBEUBBQEQsg0nb3aR0P5JA60rheV43xtO4D7x8gt7i4Or8UuN6nzpx/+Onn3a5hWzwy9bU8fSEd7WHa8/gunp8vbJMyyXymOP0YYmNHaGho9wU2w8uBrZD9a3cAmzT4yvz+uyN/tRsP4JtdunLh0Dv0eQ9sbi3yNwqy6pdU4S5hzQzEOG6943Duc3/hSYifLOuWazuJ07tPj+J029zpWD7Y64fxDXzXhfi47ezoYfVM9P5tx+rM0PSIP01O4feicHfyut8VrX4P/AMy6OL1qP56/2Zqn24oX75Sw9j43tPvAI814TxMkezdp6rxre+lqdtKFgJE2c8Gxte4nyA80ji5J9lv6pxqx922oHaOSrxKkkILImTxtjjvewc6xceZut36EUxTDjW51s/JrbxG+0PUlyX1MCKlkVEERRBLIKgqIqIqAgoRFsiFkFQdPEsRip43SSPa1rQTqQLm24dp5LOlJtbUPHNlripNrTp5XgkbquqkqpfSs4yG+4vJ9EdwHwC7lIiIiIfE8jLN7Tafdl6+ozHKD6LfM9qymWtDqqMhQEBUEAIOEkTHevGx/tNF/fv8ANNkTL4HDKc/o3t9iQ/B10XqlW4bRtPpCd3K4t5WVOqXWd1fy6mELMjBJTgNtbXrBqsMn2y2OP+ZX94exkLgy+6jwiMhBCgiKiAiqERQERUBBQiOVkQQWyI6GOYmykgfO/c0eiBvc47mhemPHN7ah48jPGGk3l5S75RiUjp5pMsbTa/1GfcY1djHjisah8fyeVfLabWl1sMxB9I97HC7HaHkeDws47NeY6oZeOQOAc0gg8Qq83NQEBAQEBAQEHUldc+Sqw+OERdbiVMzsmiJ7mnOfgV55p1SZbfDr1Zqx+r2NcN9vCFFRFEEKCIqIOQCIqAgoRHJEEFRBWEl5d0i482eRtLGbxwOLpHDc6S1rDu1966fFxdMdUvnPVOVGS0Y6+3+XEsEbGQj1Y2jNzeRdx963IcGZ3LF4i2Nwu45RwdxvyUllXfsxVPVOiPom4vu3A8+SPSY2zVJiLX6bndnH/lHnNZh3GvB3FGLkgICAgIPjNJwG/jyQdZzgASdwFyqyZTo3ojLWSVJHowsNj9+S4A/hzLU5l9U18uv6Th6s3V8PTlyn1SIIUVEUQQhBEVURUFCIqIqCgIiojW9usa+SUxDDaaa8cfa37T/AeZC2eNj67d/Dn+ocn6OLt5l5diGGPp2U0kn+oj68N4tbmsL8yLH94Lp1vEzMR7PmsmO1Yi0+7I4xXBrnAauJJA8d5XpMtWtds7sb0dVWJBtVOXw0rtWOt9LMPuA6NbzPuK1M3JinaO8trHi357PTqLo2oYWZRQwvPF0x617vE6LQtycs+/8AZsRjpHs1HajotjeXSUTuok3mmkv1RP3Xb2eY7l74ebrtdhfBvvV55iFNV0T+rqoJGHcC8aO9l40cujS9b+JalqTHlzgxBp+tY9jlk85q7QnPYFGK9fyKLo6/l5oacHSkoPmqOlK90z2wQtc9z3Boa3UvdwA5KTMRG5elKTadRHd61szgooaZsFwZCesncNQ6QjUDkAAB3X4rj58v1LbfX8HjfQx6958sqQvBvQiKIOJRURQoJZBUFCIoCIqCgIiogiPMNpXitxhlM530ELmxvubANaM8p79CPALp4Y+ni2+c5c/X5cU9o/7LG7d4mKiqyt/w4W9Wwc95/AeC9OPWYpufMvL1O8Tl6K+K9m09FGwXzg/5xrGl1HG+0cbv9XK3ff8AVt49p07VjyM00jt5aOOu5e4vxGmjOR1RTxlumR0sbC3lYnRc3otPfTa6ohx+eKT/AKyl/wC/F/dX6dvg6o+XzlrqOX0TU0ridBaeLN4aqTit8HXHy6WI4IJGFjo454nb43ta4Edx0KwibUnsz3W0d4efY30YUUpcYXS0kmvoj6SK/sO1HgQtrHzbx90beVuPWfDRcR2Jq6cnqqmknaD+jqY2P8WPI8rrfpyK29phrWxTDBVEs8LskrQD2Gxv4g2XvExLzmunEYkfsD3onSfODyCQwWG86kDv7E7HS4Ql88jIi8NzuDbnRgvxNlja0Vjb1xYvqXiu9bbFs3/+fizIS9kjXgQiUAC4laC1zew3sPetfLP1MW4b/GpGDldFu/s9WXJfUQiKlkVEVEEKKiqigIKAiOSIBBURURitoMehoo88hJcdGRtsXPPL+69cWK2SdQ1eTyaYa9Vv7PL8Awo4pWyMdM2DP1tS+RwL8ozDQDS5u4LqWtGOr5nFSeRlnXvuWHr4OqmliDswjkfGH2tnyuIzW52XpE7jbXvXptMM7hO3FdSUEuGwzFkMrszXgkSwA36xsZ+qHaX7NbbysbY6zO5SJmGPbhQLQ984D3ekW5S8666m+9Z6YdT4yYe0fpb/ALlvxV0dTrvpwNzr+Fk0dT07oi2+FM6Sir6rLSZM9PLKXO6l4IBjB1OUg7uGXmtPk4OqN1ju98d9eXHpb24FZJFQ0FQH0uVrpZIyW9dI4kCMm18oFtOJPJONg6Y3aO5kyb8NBfg7RvnbfiAwkX77rc01+p130AG6S/7tvxRep8HwW1zX8k0RLK4ltRVVNLDRSPvHESS7c+b7HWH62XW3msIpETt6TaZjTDwtu5rb2zOAv2XO9ZSle8tg2nwI4ZUQZahk4IbOx7QWEOa/VpHDUD3rypeMlZbOfDPHvEz+70jZvaOGuYS27ZG+vG62ZvPmOa5ubDak/o+l4vLpnjcdp+GaXg2xFhxKKIOJCKiKICDkEYqgoRFRBWI2k9nlJjdjGKOYXltO0vLnjXqqeM6kc3G3i4Lq11hx7fMZJty+Tr/umR2fp4o8aqo4WdXExj2xsuXWaOr49q8s9t4ols8DHGPmWrHtDSsX/Oaj9tL/AFlbeP7YcnP+bb95ZnHqGNmF4PUNYBLMMQZK4b3iOoGS/cHkKx5l5OkZPRHcPgsnlMOtLKi6dZ8iLENl6PtlRilRJE90jYo48xdHlDs5cA1uoI1GY+C1+Rm+lXcPfHTqlz6QNlfmmphY0yuikjErHyZS4ua4hzfRAGno+9MGWcldpkp0zqGLfLcXG46hbDXmHXleg6sr1WUMxgsDDh2KyljTIwULWPI1aHVHpAd+Ue5eNpnriHrGumWEg9dntN+Kzt4KfdDfNs2MdiOHNe3PG4xtew6B7TMAW+IWnx51Szt+pV6s+OJ+GNxelOD4lHJC5xpnWlivvdCXWfE7tIsR7ivSsxmx92latuJyI1/2HqzHBwDhqHAOB7QRoVzLRrs+orO42pWLKEKKiKhRXFFFQUHIIxVBQqiqI+NaSIpSN4jkI78pWdPuh5Zp1jmf0ec9FxGaq+0WxAezmcT55fct7mTqsQ43olYnJa36O1gn+eVfsv8AixTJ+RD043+vv/Vo+L/nNR+2l/rK3KfbDiZ/zLfvLZsdp3uwHBpwPo458Rp3u+y98jHtHiGu9yRPeXk1cz6D4LNhMPi590ZadjC8NmqpWwQRukldua0bh9px3AcysLXisbllETPh+hejHZhlDC5gcHyh/wCUyAaOlyA5R91rXW8SuTnyzktv29m3SvTDs9JuzLMSpGQ5msqmyE0b3bjJkcTGeTg0+IB4LLBmnHO/ZL06n52rqWekkdT1ETo5G72OFj3g8RzC6tbxaNw1LVmPLqvlusmEQ+RKMm0YNTuGD4rMR9G+Siiae1zZczvcHN968LWj6lYekR+GZa1T+uz2m/FetvCU+6G/bY/5lhvtR/8AmC0sH5dnd5/+pxf0OlDL1dN9sPlt7JaL+bQpwp8wy9cpGqWbps84mjpSd5giv/AFqZvvl0OJP/hr+zvrzbKFVUUVxRRFFRFByCMVQUKoqiBANwdx0PcsonU7YXjcaeR4NIcOxGWB+gD3RXOgIvdju4g+YXRz1+pi3Dgen5I43Kmlu0T2/wCGXwB+bGqpw3Fjzr+4sMn5ENjjx/7C/wDVpWL/AJzUftpf6ytyn2w4mf8ANt+8vc+iXDIK7Z2SknYJIjVTB7TvabMcCOIIve68ORa1e9UpET5Ymp6GIc5y1FUGX0AEb7D2tPMLW/jbe8PX6EfLtUHQ/SNN5PlM3KSRsbf5QCsbc3JPiFjDWPLOYhLheBQgyiKHN6UdJTtHX1BHHtI+8TbmsK48mee6zetPDzai6U8SYJI6WngPWTz1BvFJNIOsfcNsCAA0Wbu4Lf8A4Wk621rZ+nvM6/da3pTxJ/VR1VPEwxVENQHMjkhkswnM2ziQbtJHip/C1jeiufq8Tt6jRSYVtBTiQNilIF5IZGjrYHHtG9vtNNj2laNq5MM+dNmJrZrmIdDdG43jNRGOyOVr2+54v5rOOZePMbT6NZYxnRHTMf8ASVVSQDqy0bCeV9VZ51tdoI48fLtdItFFTYK+ngjEcTXwNYwftLkk7yTrqpxbzfL1SyzVitNQ8Yg9dntN+IXTt4atPuhvm2ZtiOHHgDGT4ShaWD8uzvc6N8nF/RitrKp1dWRU0WrswiaBqM7iBbw4+Ky4tOik2l4+q5ozZq4qe3+Xq9PCI2Mjb6rGtY3uaAB8FoXnczLuYq9FIr8OaweiFVUUVxRQoCqooOQRiqChEUIihEavtpsn8uAmhLW1bBlAccrJ2cGk8HDgfDu2+Pn6e1vDleocGcv46eXn+GVcmH1b/lDZWytaY3jQvaTYjjqLALby4/q01VzOFyP4bP1ZIliauQSSyPGgfI5wJ4ZnXufevekaiIaWa0WvNo95brguI47gQc2CMmmkd1j2dW2qp5HZQM+ZurdAOI3LLJhmY1MNHDz8GSdVvG/ie0s9T9ONQ0Wmw6FzxoSyZ8Iv7JDre9aU8Ovy6EZnUxbpprpWllNTwUpIt1lzUSN9nMA2/eCsqcSkee6TlnTEYXs3NVyfLMTmmcZCHFjnF08g33cT6g5b+5dDFg7fEOBz/Vox7pi7z8+0NzpnMgb1dNFHBGNwY0XPNzt5K26xEeIfL5cmTNPVltMyVTmzsMVTGyeM72vAuObXbweaWiJ7SuHJfDPVjtMS1Ks2VqqSUVuEzykt1DGOy1MQ3lv6xvLyK1MnH3HbvD6Xhet0v+HN+G3z7Sy1D0y4hAOqq6OGaRumY56WQ+0LEX7gFz7cOvzp9BTPuNxMS6tX0u1EhPV0ULZHXsXSPl17gAvOODX3lnPImI+GLrZMcxcZJGPFPmD8pY2mgaReziTq7j2rcxcbp+2rn5/U8FJ1e8b+IaYw5Xgn6rgTbkVZ8abVJiJiWbxrEn188PUtldILRxj67nl2gFty8MOL6dZ6nR53Kjk5Kzjjx2bzsXsgaM/KanKasghjAQ8U4I1JPF53ablrcjkdX4a+G9wOBNZ+pk8tuWm7MIVFQosIioUVxRRUFBQURyRAIOQRBEckSXTr8Ipakh1RSxSuaMoe4EPt2XGtl61zWrGolq5eJiyTu0POekrCaemfTfJ4Gwte2XMGlxDnNLddeTlv8bJN4nbheo8emG0dMeWa2MxWQxdSXObLF6D2k9m425hdXDftp+f+r8SKZOuI7S2CScO9eGB57XxNcV7TqfZy62vX7bzH9WLkoGyTiokZEOqBZTxsY1jIxe5eQN7ifdZefRE23Le/jbUw/TraZ35mf8O8vRz9ogIK11tb2PLRUnu7JqQ4WkjbJ7eV3xBU7e8EWvX7bTCsqmM/w6eFh7Qxo+ACvaPZLTkt92SZ/qxG1GNuip5HOf6RaWsaNBc6BeeXJqrd9N4cZM0duzAdG2BU1RHUS1EDZgHsjjzFwDSAS61jzC43JyzTUQ/TfTuLTNFptDfKHBaOndngpIYpLWzgFzwDvAJ3LStntaNTLs4uFix23WO7urxbaIoUVxKAiuJRURRAQUIkqiKgoRFRFCCojSulOkz0sUwGsU2Unsa9tviGrd4du8w43q9N0i0MNs5IZ445oR+W0zRDNHf88gHqkfrANOdl16fMeYfCc6IraceT7bd4n4n/AIbbDKHtD2m4PgRyPNbUTEw+byY5x2msuSryEBAQEAm2p0CLETPh0qvEWMaSCNBcuOjWrC14ht4eLa8xDzzaDFnVL7i/VNPoki2Z3af7LUvabS+s4fFrgrr3enbA0XU4fDcelLeod3PPo/yhq4/KtvI+09Mx9GCJn3bCVrOiiKhQRFRFQoOJRRFEEQVBQiOSIIKiKiLdB0sbw8VVNNTG15GENJ3NeNWH+IBeuK/TeJavLxfVxTV5ZshaOdzXOdHUMNsjvUlaNHxn7LgdQe8HtXcxT33D8+9Ux7xTFo7f4l6FbUnidTzPaefNbsQ+QteZ7T7CyeYoCBcDebJtdTLq1FSwfpD+7Y+awtaPlsY8Vp/la7imPwsvZzpHDgHZrd7twXjbJEOxx/TslvPaGAD6jEH29SEHW18jf/py8vxXl1OnDxK79/8Ad9YcPFVWQ0EIPVMdle4b7DWWQntsLeAXnltFKzLd4GK+WY6vM/4extaAAAAGgBrQNwAFgFw5nc7fc0r01iIW6jNEEJRUKKIOKCIyEEQLoqogg5AoxVACCoiogqkw896Q9n3sf8504I1BqQ3ex/CXuPHn3ro8XNuOmfL5z1Tha3eI7T5fXZraJlQ0RyENmAtY6Zu5dbHl32l+feoem2xTN6d4bAthxtCgjm3018DZJZVnUulUU0Y1dIR3m685iPltY73ntFWDrnwkkBjqg8GAZh43OVq8ZmP3dXBXLEd56XT+aXzEGfKyJuraeLRo9ojiseiZ8ti3NrijWPvPzLnjNa2lhDIw1r3DLG0aZRxcraemNQw4mK3Iydd+8Q2Do5wIwQmrkbaepaMgO9kN7jxcbHuAXI5eXc9MPvvS+L01+pb+jcFpO0IJdFQoqICK4ooghQRARVCIqAiOSIIKgt0QQNNQQCCCCCLhwO8EcQrEzHeGF6RaNS862s2GfGXVVAHOYPTfTNJMsPaY+Lm8t45rpYOTFu1vL5zm+nTTdqRuPhh8H2sqIyIpMsrb2u85HD97+66Fcsw+V5XpOHJuY/DP6NwpMWElgYJmE8mPHgWle9cm3AzcHo8XiWRIuvWWj3iXVmo4Tq5o8SsJrV70zZY8Pg98LdGszHxyrH8MeHtH1bfdLGYrijYmZ32+5G3TMeQ/FYWvENzi8WcttR/d0NkMBfiE5rapv5Kx2jToJnDdE37o4nw4rn8jP0R+r7b0z0+L9tfhj/d6hdcmZ2+srWKxqBRkl0ERUQQoqIogiCIqIaEFugoRFQERboLdEVAQLoKD2e9VjMNc2n2Qgrc0rMsFZ/uAWjmPZIO37w81tYeTNe0+HJ5nptb/AIqdpeeUhqKSoNJNI+Ah2UtcA9gPA6/VPaO1dSl994l8nzeLERPVTcw2uJ0gFnPBP3QWj4lbPd83f6c/bGlJVebHYpi8dOLaOl4Rg7ubuxedrxDe43Cvl7z2h8dm9mp8Sk+VVRcykB0Pqumt9SIcB2u/FaOfkRT931vp/pvXqIjVXp0UTWNbHG1rI2ANYxos1rRwC5VrdU7l9ZixVx16auSxegiiCXQRFRFEEughRURRACAgIjldEVAQW6IXQW6IXQVAQaZ0nYc2SmbVWAlgc1hdxdE42ynucRbvK3uHfv0uH6vx46YyQwdLjETaeN8sgz5QC0ek8kabgutW8RD4HNwr2yzFI7Og/F6mrf1FJE/M7QBgzSkdvY0c/Ned8uu7ocX0ysT3jqltGzuwLIyJq4iWX1hTNN42nfeR31jyGneudl5ftV9VxPSvFsn9m7X3bgAAAAAAB2AcAtGZ3O3drSKxqBRml0C6Kl0RLouhFEEQRFRFEEugIqhEEBEW6ChEVAQEFuiF0NF0GH2rw6arpX00DWmR7o/WcGNa0OBJJPcvfj2itty0PUcdsmHpr5YDCejeJlnVdQZDxhp/Rb3GQ6nwAWzflx/K5mD0iZ/MluNBRw07Oqp4WQs4hg9J3Nzt7j3rTvktae8uxh4uPF9sPssGyKKXQ0l0NCAi6LoJdBEUQRFEERUQEBBQgqIICIt0FuiF0FQEBAQETQgIogICCXQCUEuiiCICKhQEVEBBAgqAgqACiKgIKiaEC6BdELoLdAugXQLoCCXQLoIiiAgIqXQLoqICCXQRFVBEFugqIICC3QVELoCAgIggICAgICKICAgiCXRRBEBARRAQEBAQRBUBEEFQEBBboCIt0C6BdAugIIgiKICAgiAhoRRAQEBAQEBAQEBARFQEBAQVAQEBAQEEQEBAQQoogICAgICAg//Z'

    }
];

const sideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default sideBarReducer;