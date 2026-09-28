import { useState } from "react";
import "./Page3.css";
import Title from "../../Components/Title/Title";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Loader from "../../Components/Loader/Loader";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import RadialProgress from "../../Components/RadialProgress/RadialProgress";
import Button from "../../Components/Button/Button";
import Modal from "../../Components/Model/Modal";
import Tabs from "../../Components/Tabs/Tabs";
import Tag from "../../Components/Tag/Tag";
import Hr from "../../Components/Hr/Hr";
import { useToast } from "../../Components/Toast/ToastContext";

const Page3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  return (
    <div className="page3">
      <Title type="h1">Feedback and status</Title>
      <Paragraph>
        Loaders, progress bars, modals, toasts and combined states.
      </Paragraph>

      <Hr />

      <Title type="h2">Loaders</Title>
      <div className="flex">
        <Loader />
        <Loader color="blue" />
        <Loader color="green" />
        <Loader color="red" />
        <Loader color="purple" />
        <Loader color="orange" />
        <Loader color="yellow" />
        <Loader color="pink" />
        <Loader color="lime" />
      </div>

      <Hr />

      <Title type="h2">Progress bars</Title>
      <ProgressBar number={25} />
      <div className="spacer" />
      <ProgressBar number={50} color="blue" />
      <div className="spacer" />
      <ProgressBar number={75} color="green" />
      <div className="spacer" />
      <ProgressBar number={100} color="red" />

      <Hr />

      <Title type="h2">Radial progress</Title>
      <div className="flex">
        <RadialProgress number={10} size={60} />
        <RadialProgress number={40} size={70} color="blue" />
        <RadialProgress number={70} size={80} color="green" />
        <RadialProgress number={95} size={90} color="red" />
      </div>

      <Hr />

      <Title type="h2">Modals</Title>
      <div className="flex">
        <Button value="Open modal" onClick={() => setIsOpen(true)} />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm action"
      >
        <Paragraph>
          Are you sure you want to continue with this action?
        </Paragraph>
        <div className="flex">
          <Button value="Cancel" onClick={() => setIsOpen(false)} />
          <Button
            value="Confirm"
            color="green"
            onClick={() => {
              setIsOpen(false);
              toast("Action confirmed", "success", 3000);
            }}
          />
        </div>
      </Modal>

      <Hr />

      <Title type="h2">Toasts</Title>
      <div className="flex">
        <Button
          value="Success"
          color="green"
          onClick={() => toast("Operation completed", "success", 3000)}
        />
        <Button
          value="Info"
          color="blue"
          onClick={() => toast("New version available", "info", 4000)}
        />
        <Button
          value="Error"
          color="red"
          onClick={() => toast("Something went wrong", "error", 3000)}
        />
      </div>

      <Hr />

      <Title type="h2">Combined states</Title>
      <Tabs
        tabs={[
          {
            label: "Loading",
            content: (
              <div className="flex">
                <Loader color="blue" />
                <Paragraph>Fetching data…</Paragraph>
              </div>
            ),
          },
          {
            label: "Progress",
            content: (
              <div>
                <ProgressBar number={60} color="purple" />
                <Paragraph>Downloading file…</Paragraph>
              </div>
            ),
          },
          {
            label: "Completed",
            content: (
              <div className="flex">
                <Tag tag="Done" color="green" />
                <Paragraph>Process completed successfully.</Paragraph>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Page3;