interface IUser {
  username: string;
  email: string;
}

interface IServiceResponse {
  status: number;
  msg: string;
  ok: boolean;
}

interface ISender {
  enviarNotificacion(usuario: string, mensaje: string): void;
}

class userAdministrator {
  userRepo = UserRepository.checkInstance();
  userValidations = new UserValidations();
  sender = new EmailSender();
  constructor() {}

  agregarUsuario({ email, username }: IUser) {
    const resp = this.userValidations.validateInputs(email, username);
    try {
      if (resp.ok) {
        this.userRepo.users.push({ email, username });
      }
      this.sender.enviarNotificacion("Bienvenido", username);
    } catch (error) {
      throw new Error("Algo salio mal");
    }
  }
}

class UserRepository {
  static instance: UserRepository;
  users: IUser[] = [];

  private constructor() {}

  public static checkInstance(): UserRepository {
    if (!this.instance) return (this.instance = new UserRepository());
    return this.instance;
  }
}

class UserValidations {
  validateInputs(username: string, email: string): IServiceResponse {
    if (!email.includes("@")) {
      return { status: 400, msg: "Campo invalido", ok: false };
    }
    if (!username || !email)
      return { status: 400, msg: "Campo vacio", ok: false };
    return { status: 200, msg: "Usuario creado correctamente", ok: true };
  }
}

class EmailSender implements ISender {
  enviarNotificacion(usuario: string, mensaje: string): void {
    console.log(`${mensaje} ${usuario}`);
  }
}
